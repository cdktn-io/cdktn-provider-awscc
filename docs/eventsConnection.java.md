# `eventsConnection` Submodule <a name="`eventsConnection` Submodule" id="@cdktn/provider-awscc.eventsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsConnection <a name="EventsConnection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection awscc_events_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnection;

EventsConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .authorizationType(java.lang.String)
//  .authParameters(EventsConnectionAuthParameters)
//  .description(java.lang.String)
//  .invocationConnectivityParameters(EventsConnectionInvocationConnectivityParameters)
//  .kmsKeyIdentifier(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.authParameters">authParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the connection. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.invocationConnectivityParameters">invocationConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | The private resource the HTTP request will be sent to. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.authorizationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}.

---

##### `authParameters`<sup>Optional</sup> <a name="authParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.authParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#description EventsConnection#description}

---

##### `invocationConnectivityParameters`<sup>Optional</sup> <a name="invocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.invocationConnectivityParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

The private resource the HTTP request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#invocation_connectivity_parameters EventsConnection#invocation_connectivity_parameters}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#name EventsConnection#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters">putAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters">putInvocationConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthParameters">resetAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetInvocationConnectivityParameters">resetInvocationConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthParameters` <a name="putAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters"></a>

```java
public void putAuthParameters(EventsConnectionAuthParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

---

##### `putInvocationConnectivityParameters` <a name="putInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters"></a>

```java
public void putInvocationConnectivityParameters(EventsConnectionInvocationConnectivityParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

---

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthorizationType"></a>

```java
public void resetAuthorizationType()
```

##### `resetAuthParameters` <a name="resetAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthParameters"></a>

```java
public void resetAuthParameters()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInvocationConnectivityParameters` <a name="resetInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetInvocationConnectivityParameters"></a>

```java
public void resetInvocationConnectivityParameters()
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetKmsKeyIdentifier"></a>

```java
public void resetKmsKeyIdentifier()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventsConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnection;

EventsConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnection;

EventsConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnection;

EventsConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnection;

EventsConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventsConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EventsConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventsConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EventsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arnForPolicy">arnForPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParameters">authParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference">EventsConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParameters">invocationConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference">EventsConnectionInvocationConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParametersInput">authParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParametersInput">invocationConnectivityParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `arnForPolicy`<sup>Required</sup> <a name="arnForPolicy" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arnForPolicy"></a>

```java
public java.lang.String getArnForPolicy();
```

- *Type:* java.lang.String

---

##### `authParameters`<sup>Required</sup> <a name="authParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParameters"></a>

```java
public EventsConnectionAuthParametersOutputReference getAuthParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference">EventsConnectionAuthParametersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `invocationConnectivityParameters`<sup>Required</sup> <a name="invocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParameters"></a>

```java
public EventsConnectionInvocationConnectivityParametersOutputReference getInvocationConnectivityParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference">EventsConnectionInvocationConnectivityParametersOutputReference</a>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `authParametersInput`<sup>Optional</sup> <a name="authParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParametersInput"></a>

```java
public IResolvable|EventsConnectionAuthParameters getAuthParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `invocationConnectivityParametersInput`<sup>Optional</sup> <a name="invocationConnectivityParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParametersInput"></a>

```java
public IResolvable|EventsConnectionInvocationConnectivityParameters getInvocationConnectivityParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifierInput"></a>

```java
public java.lang.String getKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventsConnectionAuthParameters <a name="EventsConnectionAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParameters;

EventsConnectionAuthParameters.builder()
//  .apiKeyAuthParameters(EventsConnectionAuthParametersApiKeyAuthParameters)
//  .basicAuthParameters(EventsConnectionAuthParametersBasicAuthParameters)
//  .connectivityParameters(EventsConnectionAuthParametersConnectivityParameters)
//  .invocationHttpParameters(EventsConnectionAuthParametersInvocationHttpParameters)
//  .oAuthParameters(EventsConnectionAuthParametersOAuthParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.apiKeyAuthParameters">apiKeyAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.basicAuthParameters">basicAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.connectivityParameters">connectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.invocationHttpParameters">invocationHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.oAuthParameters">oAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}. |

---

##### `apiKeyAuthParameters`<sup>Optional</sup> <a name="apiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.apiKeyAuthParameters"></a>

```java
public EventsConnectionAuthParametersApiKeyAuthParameters getApiKeyAuthParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}.

---

##### `basicAuthParameters`<sup>Optional</sup> <a name="basicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.basicAuthParameters"></a>

```java
public EventsConnectionAuthParametersBasicAuthParameters getBasicAuthParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}.

---

##### `connectivityParameters`<sup>Optional</sup> <a name="connectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.connectivityParameters"></a>

```java
public EventsConnectionAuthParametersConnectivityParameters getConnectivityParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}.

---

##### `invocationHttpParameters`<sup>Optional</sup> <a name="invocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.invocationHttpParameters"></a>

```java
public EventsConnectionAuthParametersInvocationHttpParameters getInvocationHttpParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}.

---

##### `oAuthParameters`<sup>Optional</sup> <a name="oAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.oAuthParameters"></a>

```java
public EventsConnectionAuthParametersOAuthParameters getOAuthParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}.

---

### EventsConnectionAuthParametersApiKeyAuthParameters <a name="EventsConnectionAuthParametersApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersApiKeyAuthParameters;

EventsConnectionAuthParametersApiKeyAuthParameters.builder()
//  .apiKeyName(java.lang.String)
//  .apiKeyValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyName">apiKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyValue">apiKeyValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}. |

---

##### `apiKeyName`<sup>Optional</sup> <a name="apiKeyName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyName"></a>

```java
public java.lang.String getApiKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}.

---

##### `apiKeyValue`<sup>Optional</sup> <a name="apiKeyValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyValue"></a>

```java
public java.lang.String getApiKeyValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}.

---

### EventsConnectionAuthParametersBasicAuthParameters <a name="EventsConnectionAuthParametersBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersBasicAuthParameters;

EventsConnectionAuthParametersBasicAuthParameters.builder()
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#password EventsConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#username EventsConnection#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#password EventsConnection#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#username EventsConnection#username}.

---

### EventsConnectionAuthParametersConnectivityParameters <a name="EventsConnectionAuthParametersConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersConnectivityParameters;

EventsConnectionAuthParametersConnectivityParameters.builder()
//  .resourceParameters(EventsConnectionAuthParametersConnectivityParametersResourceParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.property.resourceParameters">resourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}. |

---

##### `resourceParameters`<sup>Optional</sup> <a name="resourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.property.resourceParameters"></a>

```java
public EventsConnectionAuthParametersConnectivityParametersResourceParameters getResourceParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

### EventsConnectionAuthParametersConnectivityParametersResourceParameters <a name="EventsConnectionAuthParametersConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersConnectivityParametersResourceParameters;

EventsConnectionAuthParametersConnectivityParametersResourceParameters.builder()
//  .resourceConfigurationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}. |

---

##### `resourceConfigurationArn`<sup>Optional</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.property.resourceConfigurationArn"></a>

```java
public java.lang.String getResourceConfigurationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

### EventsConnectionAuthParametersInvocationHttpParameters <a name="EventsConnectionAuthParametersInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParameters;

EventsConnectionAuthParametersInvocationHttpParameters.builder()
//  .bodyParameters(IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersBodyParameters>)
//  .headerParameters(IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters>)
//  .queryStringParameters(IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.bodyParameters">bodyParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.headerParameters">headerParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.queryStringParameters">queryStringParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}. |

---

##### `bodyParameters`<sup>Optional</sup> <a name="bodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.bodyParameters"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersBodyParameters> getBodyParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.headerParameters"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters> getHeaderParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.queryStringParameters"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters> getQueryStringParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

### EventsConnectionAuthParametersInvocationHttpParametersBodyParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters;

EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.builder()
//  .isValueSecret(java.lang.Boolean|IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters;

EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.builder()
//  .isValueSecret(java.lang.Boolean|IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters;

EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.builder()
//  .isValueSecret(java.lang.Boolean|IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParameters <a name="EventsConnectionAuthParametersOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParameters;

EventsConnectionAuthParametersOAuthParameters.builder()
//  .authorizationEndpoint(java.lang.String)
//  .clientParameters(EventsConnectionAuthParametersOAuthParametersClientParameters)
//  .httpMethod(java.lang.String)
//  .oAuthHttpParameters(EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.clientParameters">clientParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#http_method EventsConnection#http_method}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.oAuthHttpParameters">oAuthHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}. |

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}.

---

##### `clientParameters`<sup>Optional</sup> <a name="clientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.clientParameters"></a>

```java
public EventsConnectionAuthParametersOAuthParametersClientParameters getClientParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}.

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#http_method EventsConnection#http_method}.

---

##### `oAuthHttpParameters`<sup>Optional</sup> <a name="oAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.oAuthHttpParameters"></a>

```java
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters getOAuthHttpParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}.

---

### EventsConnectionAuthParametersOAuthParametersClientParameters <a name="EventsConnectionAuthParametersOAuthParametersClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersClientParameters;

EventsConnectionAuthParametersOAuthParametersClientParameters.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_id EventsConnection#client_id}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_id EventsConnection#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters;

EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.builder()
//  .bodyParameters(IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters>)
//  .headerParameters(IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters>)
//  .queryStringParameters(IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.bodyParameters">bodyParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.headerParameters">headerParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.queryStringParameters">queryStringParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}. |

---

##### `bodyParameters`<sup>Optional</sup> <a name="bodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.bodyParameters"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters> getBodyParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.headerParameters"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters> getHeaderParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.queryStringParameters"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters> getQueryStringParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters;

EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.builder()
//  .isValueSecret(java.lang.Boolean|IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters;

EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.builder()
//  .isValueSecret(java.lang.Boolean|IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters;

EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.builder()
//  .isValueSecret(java.lang.Boolean|IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionConfig <a name="EventsConnectionConfig" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionConfig;

EventsConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .authorizationType(java.lang.String)
//  .authParameters(EventsConnectionAuthParameters)
//  .description(java.lang.String)
//  .invocationConnectivityParameters(EventsConnectionInvocationConnectivityParameters)
//  .kmsKeyIdentifier(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authParameters">authParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the connection. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.invocationConnectivityParameters">invocationConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | The private resource the HTTP request will be sent to. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}.

---

##### `authParameters`<sup>Optional</sup> <a name="authParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authParameters"></a>

```java
public EventsConnectionAuthParameters getAuthParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#description EventsConnection#description}

---

##### `invocationConnectivityParameters`<sup>Optional</sup> <a name="invocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.invocationConnectivityParameters"></a>

```java
public EventsConnectionInvocationConnectivityParameters getInvocationConnectivityParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

The private resource the HTTP request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#invocation_connectivity_parameters EventsConnection#invocation_connectivity_parameters}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#name EventsConnection#name}

---

### EventsConnectionInvocationConnectivityParameters <a name="EventsConnectionInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionInvocationConnectivityParameters;

EventsConnectionInvocationConnectivityParameters.builder()
//  .resourceParameters(EventsConnectionInvocationConnectivityParametersResourceParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.property.resourceParameters">resourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}. |

---

##### `resourceParameters`<sup>Optional</sup> <a name="resourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.property.resourceParameters"></a>

```java
public EventsConnectionInvocationConnectivityParametersResourceParameters getResourceParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

### EventsConnectionInvocationConnectivityParametersResourceParameters <a name="EventsConnectionInvocationConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionInvocationConnectivityParametersResourceParameters;

EventsConnectionInvocationConnectivityParametersResourceParameters.builder()
//  .resourceConfigurationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}. |

---

##### `resourceConfigurationArn`<sup>Optional</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.property.resourceConfigurationArn"></a>

```java
public java.lang.String getResourceConfigurationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsConnectionAuthParametersApiKeyAuthParametersOutputReference <a name="EventsConnectionAuthParametersApiKeyAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference;

new EventsConnectionAuthParametersApiKeyAuthParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyName">resetApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyValue">resetApiKeyValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKeyName` <a name="resetApiKeyName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyName"></a>

```java
public void resetApiKeyName()
```

##### `resetApiKeyValue` <a name="resetApiKeyValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyValue"></a>

```java
public void resetApiKeyValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyNameInput">apiKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValueInput">apiKeyValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName">apiKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue">apiKeyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyNameInput`<sup>Optional</sup> <a name="apiKeyNameInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyNameInput"></a>

```java
public java.lang.String getApiKeyNameInput();
```

- *Type:* java.lang.String

---

##### `apiKeyValueInput`<sup>Optional</sup> <a name="apiKeyValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValueInput"></a>

```java
public java.lang.String getApiKeyValueInput();
```

- *Type:* java.lang.String

---

##### `apiKeyName`<sup>Required</sup> <a name="apiKeyName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName"></a>

```java
public java.lang.String getApiKeyName();
```

- *Type:* java.lang.String

---

##### `apiKeyValue`<sup>Required</sup> <a name="apiKeyValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue"></a>

```java
public java.lang.String getApiKeyValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersApiKeyAuthParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

---


### EventsConnectionAuthParametersBasicAuthParametersOutputReference <a name="EventsConnectionAuthParametersBasicAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersBasicAuthParametersOutputReference;

new EventsConnectionAuthParametersBasicAuthParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersBasicAuthParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

---


### EventsConnectionAuthParametersConnectivityParametersOutputReference <a name="EventsConnectionAuthParametersConnectivityParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersConnectivityParametersOutputReference;

new EventsConnectionAuthParametersConnectivityParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters">putResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resetResourceParameters">resetResourceParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceParameters` <a name="putResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters"></a>

```java
public void putResourceParameters(EventsConnectionAuthParametersConnectivityParametersResourceParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---

##### `resetResourceParameters` <a name="resetResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resetResourceParameters"></a>

```java
public void resetResourceParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters">resourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParametersInput">resourceParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceParameters`<sup>Required</sup> <a name="resourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters"></a>

```java
public EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference getResourceParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a>

---

##### `resourceParametersInput`<sup>Optional</sup> <a name="resourceParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParametersInput"></a>

```java
public IResolvable|EventsConnectionAuthParametersConnectivityParametersResourceParameters getResourceParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersConnectivityParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

---


### EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference <a name="EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference;

new EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn">resetResourceConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceConfigurationArn` <a name="resetResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn"></a>

```java
public void resetResourceConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">resourceAssociationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput">resourceConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceAssociationArn`<sup>Required</sup> <a name="resourceAssociationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```java
public java.lang.String getResourceAssociationArn();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationArnInput`<sup>Optional</sup> <a name="resourceConfigurationArnInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput"></a>

```java
public java.lang.String getResourceConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationArn`<sup>Required</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```java
public java.lang.String getResourceConfigurationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersConnectivityParametersResourceParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList;

new EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get"></a>

```java
public EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersBodyParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>>

---


### EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference;

new EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecretInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersBodyParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList;

new EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get"></a>

```java
public EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>>

---


### EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference;

new EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecretInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference;

new EventsConnectionAuthParametersInvocationHttpParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters">putBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters">putHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters">putQueryStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetBodyParameters">resetBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeaderParameters">resetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryStringParameters">resetQueryStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBodyParameters` <a name="putBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters"></a>

```java
public void putBodyParameters(IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersBodyParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>>

---

##### `putHeaderParameters` <a name="putHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters"></a>

```java
public void putHeaderParameters(IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>>

---

##### `putQueryStringParameters` <a name="putQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters"></a>

```java
public void putQueryStringParameters(IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>>

---

##### `resetBodyParameters` <a name="resetBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetBodyParameters"></a>

```java
public void resetBodyParameters()
```

##### `resetHeaderParameters` <a name="resetHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeaderParameters"></a>

```java
public void resetHeaderParameters()
```

##### `resetQueryStringParameters` <a name="resetQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryStringParameters"></a>

```java
public void resetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters">bodyParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters">headerParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters">queryStringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParametersInput">bodyParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParametersInput">headerParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParametersInput">queryStringParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyParameters`<sup>Required</sup> <a name="bodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters"></a>

```java
public EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList getBodyParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a>

---

##### `headerParameters`<sup>Required</sup> <a name="headerParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters"></a>

```java
public EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList getHeaderParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a>

---

##### `queryStringParameters`<sup>Required</sup> <a name="queryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters"></a>

```java
public EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList getQueryStringParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a>

---

##### `bodyParametersInput`<sup>Optional</sup> <a name="bodyParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParametersInput"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersBodyParameters> getBodyParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>>

---

##### `headerParametersInput`<sup>Optional</sup> <a name="headerParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParametersInput"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters> getHeaderParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>>

---

##### `queryStringParametersInput`<sup>Optional</sup> <a name="queryStringParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParametersInput"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters> getQueryStringParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersInvocationHttpParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList;

new EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get"></a>

```java
public EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>>

---


### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference;

new EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecretInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference;

new EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersOAuthParametersClientParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get"></a>

```java
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecretInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get"></a>

```java
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecretInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters">putBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters">putHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters">putQueryStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetBodyParameters">resetBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetHeaderParameters">resetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetQueryStringParameters">resetQueryStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBodyParameters` <a name="putBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters"></a>

```java
public void putBodyParameters(IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>>

---

##### `putHeaderParameters` <a name="putHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters"></a>

```java
public void putHeaderParameters(IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>>

---

##### `putQueryStringParameters` <a name="putQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters"></a>

```java
public void putQueryStringParameters(IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>>

---

##### `resetBodyParameters` <a name="resetBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetBodyParameters"></a>

```java
public void resetBodyParameters()
```

##### `resetHeaderParameters` <a name="resetHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetHeaderParameters"></a>

```java
public void resetHeaderParameters()
```

##### `resetQueryStringParameters` <a name="resetQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetQueryStringParameters"></a>

```java
public void resetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters">bodyParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters">headerParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters">queryStringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParametersInput">bodyParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParametersInput">headerParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParametersInput">queryStringParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyParameters`<sup>Required</sup> <a name="bodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters"></a>

```java
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList getBodyParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a>

---

##### `headerParameters`<sup>Required</sup> <a name="headerParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters"></a>

```java
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList getHeaderParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a>

---

##### `queryStringParameters`<sup>Required</sup> <a name="queryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters"></a>

```java
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList getQueryStringParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a>

---

##### `bodyParametersInput`<sup>Optional</sup> <a name="bodyParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParametersInput"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters> getBodyParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>>

---

##### `headerParametersInput`<sup>Optional</sup> <a name="headerParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParametersInput"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters> getHeaderParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>>

---

##### `queryStringParametersInput`<sup>Optional</sup> <a name="queryStringParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParametersInput"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters> getQueryStringParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get"></a>

```java
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference;

new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecretInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```java
public java.lang.Boolean|IResolvable getIsValueSecret();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOAuthParametersOutputReference;

new EventsConnectionAuthParametersOAuthParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters">putClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters">putOAuthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetClientParameters">resetClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetOAuthHttpParameters">resetOAuthHttpParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientParameters` <a name="putClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters"></a>

```java
public void putClientParameters(EventsConnectionAuthParametersOAuthParametersClientParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

---

##### `putOAuthHttpParameters` <a name="putOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters"></a>

```java
public void putOAuthHttpParameters(EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetAuthorizationEndpoint"></a>

```java
public void resetAuthorizationEndpoint()
```

##### `resetClientParameters` <a name="resetClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetClientParameters"></a>

```java
public void resetClientParameters()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetOAuthHttpParameters` <a name="resetOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetOAuthHttpParameters"></a>

```java
public void resetOAuthHttpParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters">clientParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters">oAuthHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParametersInput">clientParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParametersInput">oAuthHttpParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientParameters`<sup>Required</sup> <a name="clientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters"></a>

```java
public EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference getClientParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a>

---

##### `oAuthHttpParameters`<sup>Required</sup> <a name="oAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters"></a>

```java
public EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference getOAuthHttpParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a>

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientParametersInput`<sup>Optional</sup> <a name="clientParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParametersInput"></a>

```java
public IResolvable|EventsConnectionAuthParametersOAuthParametersClientParameters getClientParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `oAuthHttpParametersInput`<sup>Optional</sup> <a name="oAuthHttpParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParametersInput"></a>

```java
public IResolvable|EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters getOAuthHttpParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParametersOAuthParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

---


### EventsConnectionAuthParametersOutputReference <a name="EventsConnectionAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionAuthParametersOutputReference;

new EventsConnectionAuthParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters">putApiKeyAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters">putBasicAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters">putConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters">putInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters">putOAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetApiKeyAuthParameters">resetApiKeyAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetBasicAuthParameters">resetBasicAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetConnectivityParameters">resetConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetInvocationHttpParameters">resetInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetOAuthParameters">resetOAuthParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyAuthParameters` <a name="putApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters"></a>

```java
public void putApiKeyAuthParameters(EventsConnectionAuthParametersApiKeyAuthParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

---

##### `putBasicAuthParameters` <a name="putBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters"></a>

```java
public void putBasicAuthParameters(EventsConnectionAuthParametersBasicAuthParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

---

##### `putConnectivityParameters` <a name="putConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters"></a>

```java
public void putConnectivityParameters(EventsConnectionAuthParametersConnectivityParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

---

##### `putInvocationHttpParameters` <a name="putInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters"></a>

```java
public void putInvocationHttpParameters(EventsConnectionAuthParametersInvocationHttpParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

---

##### `putOAuthParameters` <a name="putOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters"></a>

```java
public void putOAuthParameters(EventsConnectionAuthParametersOAuthParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

---

##### `resetApiKeyAuthParameters` <a name="resetApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetApiKeyAuthParameters"></a>

```java
public void resetApiKeyAuthParameters()
```

##### `resetBasicAuthParameters` <a name="resetBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetBasicAuthParameters"></a>

```java
public void resetBasicAuthParameters()
```

##### `resetConnectivityParameters` <a name="resetConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetConnectivityParameters"></a>

```java
public void resetConnectivityParameters()
```

##### `resetInvocationHttpParameters` <a name="resetInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetInvocationHttpParameters"></a>

```java
public void resetInvocationHttpParameters()
```

##### `resetOAuthParameters` <a name="resetOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetOAuthParameters"></a>

```java
public void resetOAuthParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters">apiKeyAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference">EventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParameters">basicAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference">EventsConnectionAuthParametersBasicAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParameters">connectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParameters">invocationHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference">EventsConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParameters">oAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParametersInput">apiKeyAuthParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParametersInput">basicAuthParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParametersInput">connectivityParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParametersInput">invocationHttpParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParametersInput">oAuthParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyAuthParameters`<sup>Required</sup> <a name="apiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters"></a>

```java
public EventsConnectionAuthParametersApiKeyAuthParametersOutputReference getApiKeyAuthParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference">EventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a>

---

##### `basicAuthParameters`<sup>Required</sup> <a name="basicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParameters"></a>

```java
public EventsConnectionAuthParametersBasicAuthParametersOutputReference getBasicAuthParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference">EventsConnectionAuthParametersBasicAuthParametersOutputReference</a>

---

##### `connectivityParameters`<sup>Required</sup> <a name="connectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParameters"></a>

```java
public EventsConnectionAuthParametersConnectivityParametersOutputReference getConnectivityParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersOutputReference</a>

---

##### `invocationHttpParameters`<sup>Required</sup> <a name="invocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```java
public EventsConnectionAuthParametersInvocationHttpParametersOutputReference getInvocationHttpParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference">EventsConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `oAuthParameters`<sup>Required</sup> <a name="oAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParameters"></a>

```java
public EventsConnectionAuthParametersOAuthParametersOutputReference getOAuthParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOutputReference</a>

---

##### `apiKeyAuthParametersInput`<sup>Optional</sup> <a name="apiKeyAuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParametersInput"></a>

```java
public IResolvable|EventsConnectionAuthParametersApiKeyAuthParameters getApiKeyAuthParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

---

##### `basicAuthParametersInput`<sup>Optional</sup> <a name="basicAuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParametersInput"></a>

```java
public IResolvable|EventsConnectionAuthParametersBasicAuthParameters getBasicAuthParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

---

##### `connectivityParametersInput`<sup>Optional</sup> <a name="connectivityParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParametersInput"></a>

```java
public IResolvable|EventsConnectionAuthParametersConnectivityParameters getConnectivityParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

---

##### `invocationHttpParametersInput`<sup>Optional</sup> <a name="invocationHttpParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParametersInput"></a>

```java
public IResolvable|EventsConnectionAuthParametersInvocationHttpParameters getInvocationHttpParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

---

##### `oAuthParametersInput`<sup>Optional</sup> <a name="oAuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParametersInput"></a>

```java
public IResolvable|EventsConnectionAuthParametersOAuthParameters getOAuthParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionAuthParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

---


### EventsConnectionInvocationConnectivityParametersOutputReference <a name="EventsConnectionInvocationConnectivityParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionInvocationConnectivityParametersOutputReference;

new EventsConnectionInvocationConnectivityParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters">putResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resetResourceParameters">resetResourceParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceParameters` <a name="putResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters"></a>

```java
public void putResourceParameters(EventsConnectionInvocationConnectivityParametersResourceParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

---

##### `resetResourceParameters` <a name="resetResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resetResourceParameters"></a>

```java
public void resetResourceParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters">resourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParametersInput">resourceParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceParameters`<sup>Required</sup> <a name="resourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters"></a>

```java
public EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference getResourceParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a>

---

##### `resourceParametersInput`<sup>Optional</sup> <a name="resourceParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParametersInput"></a>

```java
public IResolvable|EventsConnectionInvocationConnectivityParametersResourceParameters getResourceParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionInvocationConnectivityParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

---


### EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference <a name="EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_connection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference;

new EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn">resetResourceConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceConfigurationArn` <a name="resetResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn"></a>

```java
public void resetResourceConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">resourceAssociationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput">resourceConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceAssociationArn`<sup>Required</sup> <a name="resourceAssociationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```java
public java.lang.String getResourceAssociationArn();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationArnInput`<sup>Optional</sup> <a name="resourceConfigurationArnInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput"></a>

```java
public java.lang.String getResourceConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationArn`<sup>Required</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```java
public java.lang.String getResourceConfigurationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsConnectionInvocationConnectivityParametersResourceParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

---



