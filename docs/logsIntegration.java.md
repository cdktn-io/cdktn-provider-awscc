# `logsIntegration` Submodule <a name="`logsIntegration` Submodule" id="@cdktn/provider-awscc.logsIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsIntegration <a name="LogsIntegration" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration awscc_logs_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegration;

LogsIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .integrationName(java.lang.String)
    .integrationType(java.lang.String)
    .resourceConfig(LogsIntegrationResourceConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.integrationName">integrationName</a></code> | <code>java.lang.String</code> | User provided identifier for integration, unique to the user account. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.integrationType">integrationType</a></code> | <code>java.lang.String</code> | The type of the Integration. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.resourceConfig">resourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | OpenSearchResourceConfig for the given Integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.integrationName"></a>

- *Type:* java.lang.String

User provided identifier for integration, unique to the user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#integration_name LogsIntegration#integration_name}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.integrationType"></a>

- *Type:* java.lang.String

The type of the Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#integration_type LogsIntegration#integration_type}

---

##### `resourceConfig`<sup>Required</sup> <a name="resourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.resourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

OpenSearchResourceConfig for the given Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#resource_config LogsIntegration#resource_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.putResourceConfig">putResourceConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceConfig` <a name="putResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.putResourceConfig"></a>

```java
public void putResourceConfig(LogsIntegrationResourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.putResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegration;

LogsIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegration;

LogsIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegration;

LogsIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegration;

LogsIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogsIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogsIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogsIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogsIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogsIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationStatus">integrationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfig">resourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference">LogsIntegrationResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationNameInput">integrationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationTypeInput">integrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfigInput">resourceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationName">integrationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationStatus`<sup>Required</sup> <a name="integrationStatus" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationStatus"></a>

```java
public java.lang.String getIntegrationStatus();
```

- *Type:* java.lang.String

---

##### `resourceConfig`<sup>Required</sup> <a name="resourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfig"></a>

```java
public LogsIntegrationResourceConfigOutputReference getResourceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference">LogsIntegrationResourceConfigOutputReference</a>

---

##### `integrationNameInput`<sup>Optional</sup> <a name="integrationNameInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationNameInput"></a>

```java
public java.lang.String getIntegrationNameInput();
```

- *Type:* java.lang.String

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationTypeInput"></a>

```java
public java.lang.String getIntegrationTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceConfigInput`<sup>Optional</sup> <a name="resourceConfigInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfigInput"></a>

```java
public IResolvable|LogsIntegrationResourceConfig getResourceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationName"></a>

```java
public java.lang.String getIntegrationName();
```

- *Type:* java.lang.String

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogsIntegrationConfig <a name="LogsIntegrationConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegrationConfig;

LogsIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .integrationName(java.lang.String)
    .integrationType(java.lang.String)
    .resourceConfig(LogsIntegrationResourceConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationName">integrationName</a></code> | <code>java.lang.String</code> | User provided identifier for integration, unique to the user account. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | The type of the Integration. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.resourceConfig">resourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | OpenSearchResourceConfig for the given Integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationName"></a>

```java
public java.lang.String getIntegrationName();
```

- *Type:* java.lang.String

User provided identifier for integration, unique to the user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#integration_name LogsIntegration#integration_name}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

The type of the Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#integration_type LogsIntegration#integration_type}

---

##### `resourceConfig`<sup>Required</sup> <a name="resourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.resourceConfig"></a>

```java
public LogsIntegrationResourceConfig getResourceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

OpenSearchResourceConfig for the given Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#resource_config LogsIntegration#resource_config}

---

### LogsIntegrationResourceConfig <a name="LogsIntegrationResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegrationResourceConfig;

LogsIntegrationResourceConfig.builder()
//  .openSearchResourceConfig(LogsIntegrationResourceConfigOpenSearchResourceConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig.property.openSearchResourceConfig">openSearchResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#open_search_resource_config LogsIntegration#open_search_resource_config}. |

---

##### `openSearchResourceConfig`<sup>Optional</sup> <a name="openSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig.property.openSearchResourceConfig"></a>

```java
public LogsIntegrationResourceConfigOpenSearchResourceConfig getOpenSearchResourceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#open_search_resource_config LogsIntegration#open_search_resource_config}.

---

### LogsIntegrationResourceConfigOpenSearchResourceConfig <a name="LogsIntegrationResourceConfigOpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegrationResourceConfigOpenSearchResourceConfig;

LogsIntegrationResourceConfigOpenSearchResourceConfig.builder()
//  .applicationArn(java.lang.String)
//  .dashboardViewerPrincipals(java.util.List<java.lang.String>)
//  .dataSourceRoleArn(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .retentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#application_arn LogsIntegration#application_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dashboardViewerPrincipals">dashboardViewerPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#dashboard_viewer_principals LogsIntegration#dashboard_viewer_principals}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dataSourceRoleArn">dataSourceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#data_source_role_arn LogsIntegration#data_source_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#kms_key_arn LogsIntegration#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#retention_days LogsIntegration#retention_days}. |

---

##### `applicationArn`<sup>Optional</sup> <a name="applicationArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#application_arn LogsIntegration#application_arn}.

---

##### `dashboardViewerPrincipals`<sup>Optional</sup> <a name="dashboardViewerPrincipals" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dashboardViewerPrincipals"></a>

```java
public java.util.List<java.lang.String> getDashboardViewerPrincipals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#dashboard_viewer_principals LogsIntegration#dashboard_viewer_principals}.

---

##### `dataSourceRoleArn`<sup>Optional</sup> <a name="dataSourceRoleArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dataSourceRoleArn"></a>

```java
public java.lang.String getDataSourceRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#data_source_role_arn LogsIntegration#data_source_role_arn}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#kms_key_arn LogsIntegration#kms_key_arn}.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_integration#retention_days LogsIntegration#retention_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference <a name="LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference;

new LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetApplicationArn">resetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDashboardViewerPrincipals">resetDashboardViewerPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDataSourceRoleArn">resetDataSourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationArn` <a name="resetApplicationArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetApplicationArn"></a>

```java
public void resetApplicationArn()
```

##### `resetDashboardViewerPrincipals` <a name="resetDashboardViewerPrincipals" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDashboardViewerPrincipals"></a>

```java
public void resetDashboardViewerPrincipals()
```

##### `resetDataSourceRoleArn` <a name="resetDataSourceRoleArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDataSourceRoleArn"></a>

```java
public void resetDataSourceRoleArn()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArnInput">applicationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipalsInput">dashboardViewerPrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArnInput">dataSourceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipals">dashboardViewerPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArn">dataSourceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArnInput"></a>

```java
public java.lang.String getApplicationArnInput();
```

- *Type:* java.lang.String

---

##### `dashboardViewerPrincipalsInput`<sup>Optional</sup> <a name="dashboardViewerPrincipalsInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getDashboardViewerPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSourceRoleArnInput`<sup>Optional</sup> <a name="dataSourceRoleArnInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArnInput"></a>

```java
public java.lang.String getDataSourceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

##### `dashboardViewerPrincipals`<sup>Required</sup> <a name="dashboardViewerPrincipals" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipals"></a>

```java
public java.util.List<java.lang.String> getDashboardViewerPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSourceRoleArn`<sup>Required</sup> <a name="dataSourceRoleArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArn"></a>

```java
public java.lang.String getDataSourceRoleArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsIntegrationResourceConfigOpenSearchResourceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

---


### LogsIntegrationResourceConfigOutputReference <a name="LogsIntegrationResourceConfigOutputReference" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_integration.LogsIntegrationResourceConfigOutputReference;

new LogsIntegrationResourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.putOpenSearchResourceConfig">putOpenSearchResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resetOpenSearchResourceConfig">resetOpenSearchResourceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOpenSearchResourceConfig` <a name="putOpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.putOpenSearchResourceConfig"></a>

```java
public void putOpenSearchResourceConfig(LogsIntegrationResourceConfigOpenSearchResourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.putOpenSearchResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

---

##### `resetOpenSearchResourceConfig` <a name="resetOpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resetOpenSearchResourceConfig"></a>

```java
public void resetOpenSearchResourceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfig">openSearchResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference">LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfigInput">openSearchResourceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `openSearchResourceConfig`<sup>Required</sup> <a name="openSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfig"></a>

```java
public LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference getOpenSearchResourceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference">LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference</a>

---

##### `openSearchResourceConfigInput`<sup>Optional</sup> <a name="openSearchResourceConfigInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfigInput"></a>

```java
public IResolvable|LogsIntegrationResourceConfigOpenSearchResourceConfig getOpenSearchResourceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsIntegrationResourceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

---



