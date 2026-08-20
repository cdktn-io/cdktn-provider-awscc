# `appflowConnector` Submodule <a name="`appflowConnector` Submodule" id="@cdktn/provider-awscc.appflowConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppflowConnector <a name="AppflowConnector" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector awscc_appflow_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnector;

AppflowConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectorProvisioningConfig(AppflowConnectorConnectorProvisioningConfig)
    .connectorProvisioningType(java.lang.String)
//  .connectorLabel(java.lang.String)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorProvisioningConfig">connectorProvisioningConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | Contains information about the configuration of the connector being registered. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorProvisioningType">connectorProvisioningType</a></code> | <code>java.lang.String</code> | The provisioning type of the connector. Currently the only supported value is LAMBDA. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorLabel">connectorLabel</a></code> | <code>java.lang.String</code> | The name of the connector. The name is unique for each ConnectorRegistration in your AWS account. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description about the connector that's being registered. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectorProvisioningConfig`<sup>Required</sup> <a name="connectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorProvisioningConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

Contains information about the configuration of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#connector_provisioning_config AppflowConnector#connector_provisioning_config}

---

##### `connectorProvisioningType`<sup>Required</sup> <a name="connectorProvisioningType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorProvisioningType"></a>

- *Type:* java.lang.String

The provisioning type of the connector. Currently the only supported value is LAMBDA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#connector_provisioning_type AppflowConnector#connector_provisioning_type}

---

##### `connectorLabel`<sup>Optional</sup> <a name="connectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorLabel"></a>

- *Type:* java.lang.String

The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#connector_label AppflowConnector#connector_label}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description about the connector that's being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#description AppflowConnector#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig">putConnectorProvisioningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetConnectorLabel">resetConnectorLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectorProvisioningConfig` <a name="putConnectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig"></a>

```java
public void putConnectorProvisioningConfig(AppflowConnectorConnectorProvisioningConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---

##### `resetConnectorLabel` <a name="resetConnectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetConnectorLabel"></a>

```java
public void resetConnectorLabel()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppflowConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnector;

AppflowConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnector;

AppflowConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnector;

AppflowConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnector;

AppflowConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppflowConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppflowConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppflowConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppflowConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppflowConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorArn">connectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfig">connectorProvisioningConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference">AppflowConnectorConnectorProvisioningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabelInput">connectorLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfigInput">connectorProvisioningConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningTypeInput">connectorProvisioningTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabel">connectorLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningType">connectorProvisioningType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorArn"></a>

```java
public java.lang.String getConnectorArn();
```

- *Type:* java.lang.String

---

##### `connectorProvisioningConfig`<sup>Required</sup> <a name="connectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfig"></a>

```java
public AppflowConnectorConnectorProvisioningConfigOutputReference getConnectorProvisioningConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference">AppflowConnectorConnectorProvisioningConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `connectorLabelInput`<sup>Optional</sup> <a name="connectorLabelInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabelInput"></a>

```java
public java.lang.String getConnectorLabelInput();
```

- *Type:* java.lang.String

---

##### `connectorProvisioningConfigInput`<sup>Optional</sup> <a name="connectorProvisioningConfigInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfigInput"></a>

```java
public IResolvable|AppflowConnectorConnectorProvisioningConfig getConnectorProvisioningConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---

##### `connectorProvisioningTypeInput`<sup>Optional</sup> <a name="connectorProvisioningTypeInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningTypeInput"></a>

```java
public java.lang.String getConnectorProvisioningTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `connectorLabel`<sup>Required</sup> <a name="connectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabel"></a>

```java
public java.lang.String getConnectorLabel();
```

- *Type:* java.lang.String

---

##### `connectorProvisioningType`<sup>Required</sup> <a name="connectorProvisioningType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningType"></a>

```java
public java.lang.String getConnectorProvisioningType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppflowConnectorConfig <a name="AppflowConnectorConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnectorConfig;

AppflowConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectorProvisioningConfig(AppflowConnectorConnectorProvisioningConfig)
    .connectorProvisioningType(java.lang.String)
//  .connectorLabel(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningConfig">connectorProvisioningConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | Contains information about the configuration of the connector being registered. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningType">connectorProvisioningType</a></code> | <code>java.lang.String</code> | The provisioning type of the connector. Currently the only supported value is LAMBDA. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorLabel">connectorLabel</a></code> | <code>java.lang.String</code> | The name of the connector. The name is unique for each ConnectorRegistration in your AWS account. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description about the connector that's being registered. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectorProvisioningConfig`<sup>Required</sup> <a name="connectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningConfig"></a>

```java
public AppflowConnectorConnectorProvisioningConfig getConnectorProvisioningConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

Contains information about the configuration of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#connector_provisioning_config AppflowConnector#connector_provisioning_config}

---

##### `connectorProvisioningType`<sup>Required</sup> <a name="connectorProvisioningType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningType"></a>

```java
public java.lang.String getConnectorProvisioningType();
```

- *Type:* java.lang.String

The provisioning type of the connector. Currently the only supported value is LAMBDA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#connector_provisioning_type AppflowConnector#connector_provisioning_type}

---

##### `connectorLabel`<sup>Optional</sup> <a name="connectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorLabel"></a>

```java
public java.lang.String getConnectorLabel();
```

- *Type:* java.lang.String

The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#connector_label AppflowConnector#connector_label}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description about the connector that's being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#description AppflowConnector#description}

---

### AppflowConnectorConnectorProvisioningConfig <a name="AppflowConnectorConnectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnectorConnectorProvisioningConfig;

AppflowConnectorConnectorProvisioningConfig.builder()
//  .lambda(AppflowConnectorConnectorProvisioningConfigLambda)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | Contains information about the configuration of the lambda which is being registered as the connector. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.property.lambda"></a>

```java
public AppflowConnectorConnectorProvisioningConfigLambda getLambda();
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

Contains information about the configuration of the lambda which is being registered as the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#lambda AppflowConnector#lambda}

---

### AppflowConnectorConnectorProvisioningConfigLambda <a name="AppflowConnectorConnectorProvisioningConfigLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.Initializer"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnectorConnectorProvisioningConfigLambda;

AppflowConnectorConnectorProvisioningConfigLambda.builder()
//  .lambdaArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Lambda ARN of the connector being registered. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Lambda ARN of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appflow_connector#lambda_arn AppflowConnector#lambda_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppflowConnectorConnectorProvisioningConfigLambdaOutputReference <a name="AppflowConnectorConnectorProvisioningConfigLambdaOutputReference" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference;

new AppflowConnectorConnectorProvisioningConfigLambdaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resetLambdaArn"></a>

```java
public void resetLambdaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue"></a>

```java
public IResolvable|AppflowConnectorConnectorProvisioningConfigLambda getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---


### AppflowConnectorConnectorProvisioningConfigOutputReference <a name="AppflowConnectorConnectorProvisioningConfigOutputReference" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appflow_connector.AppflowConnectorConnectorProvisioningConfigOutputReference;

new AppflowConnectorConnectorProvisioningConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambda` <a name="putLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda"></a>

```java
public void putLambda(AppflowConnectorConnectorProvisioningConfigLambda value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resetLambda"></a>

```java
public void resetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference">AppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda"></a>

```java
public AppflowConnectorConnectorProvisioningConfigLambdaOutputReference getLambda();
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference">AppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambdaInput"></a>

```java
public IResolvable|AppflowConnectorConnectorProvisioningConfigLambda getLambdaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppflowConnectorConnectorProvisioningConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---



