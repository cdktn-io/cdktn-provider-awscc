# `appfabricIngestionDestination` Submodule <a name="`appfabricIngestionDestination` Submodule" id="@cdktn/provider-awscc.appfabricIngestionDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricIngestionDestination <a name="AppfabricIngestionDestination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination awscc_appfabric_ingestion_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appBundleArn(java.lang.String)
    .destinationConfiguration(AppfabricIngestionDestinationDestinationConfiguration)
    .ingestionArn(java.lang.String)
    .processingConfiguration(AppfabricIngestionDestinationProcessingConfiguration)
//  .tags(IResolvable|java.util.List<AppfabricIngestionDestinationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the app bundle. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a></code> | Contains information about the destination of ingested data. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.ingestionArn">ingestionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the ingestion. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.processingConfiguration">processingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a></code> | Contains information about how ingested data is processed. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>></code> | A map of the key-value pairs of the tag or tags to assign to the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.appBundleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the app bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.destinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

Contains information about the destination of ingested data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}

---

##### `ingestionArn`<sup>Required</sup> <a name="ingestionArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.ingestionArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}

---

##### `processingConfiguration`<sup>Required</sup> <a name="processingConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.processingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

Contains information about how ingested data is processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>>

A map of the key-value pairs of the tag or tags to assign to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration">putDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration">putProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfiguration` <a name="putDestinationConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration"></a>

```java
public void putDestinationConfiguration(AppfabricIngestionDestinationDestinationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

---

##### `putProcessingConfiguration` <a name="putProcessingConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration"></a>

```java
public void putProcessingConfiguration(AppfabricIngestionDestinationProcessingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppfabricIngestionDestinationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppfabricIngestionDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppfabricIngestionDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppfabricIngestionDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppfabricIngestionDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppfabricIngestionDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppfabricIngestionDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference">AppfabricIngestionDestinationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration">processingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference">AppfabricIngestionDestinationProcessingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList">AppfabricIngestionDestinationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput">appBundleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput">destinationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput">ingestionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput">processingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn">ingestionArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationOutputReference getDestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference">AppfabricIngestionDestinationDestinationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `processingConfiguration`<sup>Required</sup> <a name="processingConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration"></a>

```java
public AppfabricIngestionDestinationProcessingConfigurationOutputReference getProcessingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference">AppfabricIngestionDestinationProcessingConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags"></a>

```java
public AppfabricIngestionDestinationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList">AppfabricIngestionDestinationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `appBundleArnInput`<sup>Optional</sup> <a name="appBundleArnInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput"></a>

```java
public java.lang.String getAppBundleArnInput();
```

- *Type:* java.lang.String

---

##### `destinationConfigurationInput`<sup>Optional</sup> <a name="destinationConfigurationInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfiguration getDestinationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

---

##### `ingestionArnInput`<sup>Optional</sup> <a name="ingestionArnInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput"></a>

```java
public java.lang.String getIngestionArnInput();
```

- *Type:* java.lang.String

---

##### `processingConfigurationInput`<sup>Optional</sup> <a name="processingConfigurationInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput"></a>

```java
public IResolvable|AppfabricIngestionDestinationProcessingConfiguration getProcessingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppfabricIngestionDestinationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>>

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn"></a>

```java
public java.lang.String getAppBundleArn();
```

- *Type:* java.lang.String

---

##### `ingestionArn`<sup>Required</sup> <a name="ingestionArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn"></a>

```java
public java.lang.String getIngestionArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricIngestionDestinationConfig <a name="AppfabricIngestionDestinationConfig" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationConfig;

AppfabricIngestionDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appBundleArn(java.lang.String)
    .destinationConfiguration(AppfabricIngestionDestinationDestinationConfiguration)
    .ingestionArn(java.lang.String)
    .processingConfiguration(AppfabricIngestionDestinationProcessingConfiguration)
//  .tags(IResolvable|java.util.List<AppfabricIngestionDestinationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the app bundle. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a></code> | Contains information about the destination of ingested data. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn">ingestionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the ingestion. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration">processingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a></code> | Contains information about how ingested data is processed. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>></code> | A map of the key-value pairs of the tag or tags to assign to the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn"></a>

```java
public java.lang.String getAppBundleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the app bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration"></a>

```java
public AppfabricIngestionDestinationDestinationConfiguration getDestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

Contains information about the destination of ingested data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}

---

##### `ingestionArn`<sup>Required</sup> <a name="ingestionArn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn"></a>

```java
public java.lang.String getIngestionArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}

---

##### `processingConfiguration`<sup>Required</sup> <a name="processingConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration"></a>

```java
public AppfabricIngestionDestinationProcessingConfiguration getProcessingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

Contains information about how ingested data is processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppfabricIngestionDestinationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>>

A map of the key-value pairs of the tag or tags to assign to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}

---

### AppfabricIngestionDestinationDestinationConfiguration <a name="AppfabricIngestionDestinationDestinationConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfiguration;

AppfabricIngestionDestinationDestinationConfiguration.builder()
    .auditLog(AppfabricIngestionDestinationDestinationConfigurationAuditLog)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog">auditLog</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a></code> | Contains information about an audit log destination configuration. |

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLog getAuditLog();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>

Contains information about an audit log destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLog <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLog;

AppfabricIngestionDestinationDestinationConfigurationAuditLog.builder()
    .destination(AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a></code> | Contains information about an audit log destination. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>

Contains information about an audit log destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#destination AppfabricIngestionDestination#destination}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination;

AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.builder()
//  .firehoseStream(AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream)
//  .s3Bucket(AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream">firehoseStream</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a></code> | Contains information about an Amazon Kinesis Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket">s3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a></code> | Contains information about an Amazon S3 bucket. |

---

##### `firehoseStream`<sup>Optional</sup> <a name="firehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream getFirehoseStream();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>

Contains information about an Amazon Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#firehose_stream AppfabricIngestionDestination#firehose_stream}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket getS3Bucket();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>

Contains information about an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#s3_bucket AppfabricIngestionDestination#s3_bucket}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream;

AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.builder()
//  .streamName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName">streamName</a></code> | <code>java.lang.String</code> | The name of the Amazon Kinesis Data Firehose delivery stream. |

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

The name of the Amazon Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket;

AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.builder()
//  .bucketName(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The object key to use. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The object key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}

---

### AppfabricIngestionDestinationProcessingConfiguration <a name="AppfabricIngestionDestinationProcessingConfiguration" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfiguration;

AppfabricIngestionDestinationProcessingConfiguration.builder()
    .auditLog(AppfabricIngestionDestinationProcessingConfigurationAuditLog)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog">auditLog</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a></code> | Contains information about an audit log processing configuration. |

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog"></a>

```java
public AppfabricIngestionDestinationProcessingConfigurationAuditLog getAuditLog();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>

Contains information about an audit log processing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationProcessingConfigurationAuditLog <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfigurationAuditLog;

AppfabricIngestionDestinationProcessingConfigurationAuditLog.builder()
    .format(java.lang.String)
    .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format">format</a></code> | <code>java.lang.String</code> | The format in which the audit logs need to be formatted. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema">schema</a></code> | <code>java.lang.String</code> | The event schema in which the audit logs need to be formatted. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format in which the audit logs need to be formatted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The event schema in which the audit logs need to be formatted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}

---

### AppfabricIngestionDestinationTags <a name="AppfabricIngestionDestinationTags" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationTags;

AppfabricIngestionDestinationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.property.key">key</a></code> | <code>java.lang.String</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.property.value">value</a></code> | <code>java.lang.String</code> | Tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#key AppfabricIngestionDestination#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#value AppfabricIngestionDestination#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resetStreamName">resetStreamName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStreamName` <a name="resetStreamName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resetStreamName"></a>

```java
public void resetStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput"></a>

```java
public java.lang.String getStreamNameInput();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream">putFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket">putS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream">resetFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirehoseStream` <a name="putFirehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream"></a>

```java
public void putFirehoseStream(AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>

---

##### `putS3Bucket` <a name="putS3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket"></a>

```java
public void putS3Bucket(AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>

---

##### `resetFirehoseStream` <a name="resetFirehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream"></a>

```java
public void resetFirehoseStream()
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream">firehoseStream</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput">firehoseStreamInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firehoseStream`<sup>Required</sup> <a name="firehoseStream" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference getFirehoseStream();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference</a>

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference getS3Bucket();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference</a>

---

##### `firehoseStreamInput`<sup>Optional</sup> <a name="firehoseStreamInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream getFirehoseStreamInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket getS3BucketInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination">putDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination"></a>

```java
public void putDestination(AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput">destinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination getDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfigurationAuditLog getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>

---


### AppfabricIngestionDestinationDestinationConfigurationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog">putAuditLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditLog` <a name="putAuditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog"></a>

```java
public void putAuditLog(AppfabricIngestionDestinationDestinationConfigurationAuditLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog">auditLog</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput">auditLogInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference getAuditLog();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference">AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference</a>

---

##### `auditLogInput`<sup>Optional</sup> <a name="auditLogInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfigurationAuditLog getAuditLogInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AppfabricIngestionDestinationDestinationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

---


### AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference;

new AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue"></a>

```java
public IResolvable|AppfabricIngestionDestinationProcessingConfigurationAuditLog getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>

---


### AppfabricIngestionDestinationProcessingConfigurationOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfigurationOutputReference;

new AppfabricIngestionDestinationProcessingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog">putAuditLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditLog` <a name="putAuditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog"></a>

```java
public void putAuditLog(AppfabricIngestionDestinationProcessingConfigurationAuditLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog">auditLog</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference">AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput">auditLogInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog"></a>

```java
public AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference getAuditLog();
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference">AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference</a>

---

##### `auditLogInput`<sup>Optional</sup> <a name="auditLogInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput"></a>

```java
public IResolvable|AppfabricIngestionDestinationProcessingConfigurationAuditLog getAuditLogInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AppfabricIngestionDestinationProcessingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

---


### AppfabricIngestionDestinationTagsList <a name="AppfabricIngestionDestinationTagsList" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationTagsList;

new AppfabricIngestionDestinationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.get"></a>

```java
public AppfabricIngestionDestinationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppfabricIngestionDestinationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>>

---


### AppfabricIngestionDestinationTagsOutputReference <a name="AppfabricIngestionDestinationTagsOutputReference" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appfabric_ingestion_destination.AppfabricIngestionDestinationTagsOutputReference;

new AppfabricIngestionDestinationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppfabricIngestionDestinationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appfabricIngestionDestination.AppfabricIngestionDestinationTags">AppfabricIngestionDestinationTags</a>

---



