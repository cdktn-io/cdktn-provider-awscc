# `xrayTransactionSearchConfig` Submodule <a name="`xrayTransactionSearchConfig` Submodule" id="@cdktn/provider-awscc.xrayTransactionSearchConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XrayTransactionSearchConfig <a name="XrayTransactionSearchConfig" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config awscc_xray_transaction_search_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_transaction_search_config.XrayTransactionSearchConfig;

XrayTransactionSearchConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cloudwatchLogsConfiguration(XrayTransactionSearchConfigCloudwatchLogsConfiguration)
//  .indexingPercentage(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a></code> | Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.indexingPercentage">indexingPercentage</a></code> | <code>java.lang.Number</code> | Determines the percentage of traces indexed from CloudWatch Logs to X-Ray. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudwatchLogsConfiguration`<sup>Optional</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.cloudwatchLogsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search.

It is used only at that time and is never returned

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#cloudwatch_logs_configuration XrayTransactionSearchConfig#cloudwatch_logs_configuration}

---

##### `indexingPercentage`<sup>Optional</sup> <a name="indexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.indexingPercentage"></a>

- *Type:* java.lang.Number

Determines the percentage of traces indexed from CloudWatch Logs to X-Ray.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#indexing_percentage XrayTransactionSearchConfig#indexing_percentage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.putCloudwatchLogsConfiguration">putCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetCloudwatchLogsConfiguration">resetCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetIndexingPercentage">resetIndexingPercentage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudwatchLogsConfiguration` <a name="putCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.putCloudwatchLogsConfiguration"></a>

```java
public void putCloudwatchLogsConfiguration(XrayTransactionSearchConfigCloudwatchLogsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.putCloudwatchLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

---

##### `resetCloudwatchLogsConfiguration` <a name="resetCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetCloudwatchLogsConfiguration"></a>

```java
public void resetCloudwatchLogsConfiguration()
```

##### `resetIndexingPercentage` <a name="resetIndexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetIndexingPercentage"></a>

```java
public void resetIndexingPercentage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a XrayTransactionSearchConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.xray_transaction_search_config.XrayTransactionSearchConfig;

XrayTransactionSearchConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.xray_transaction_search_config.XrayTransactionSearchConfig;

XrayTransactionSearchConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.xray_transaction_search_config.XrayTransactionSearchConfig;

XrayTransactionSearchConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.xray_transaction_search_config.XrayTransactionSearchConfig;

XrayTransactionSearchConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),XrayTransactionSearchConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a XrayTransactionSearchConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the XrayTransactionSearchConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing XrayTransactionSearchConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the XrayTransactionSearchConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference">XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfigurationInput">cloudwatchLogsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentageInput">indexingPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentage">indexingPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsConfiguration`<sup>Required</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfiguration"></a>

```java
public XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference getCloudwatchLogsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference">XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsConfigurationInput`<sup>Optional</sup> <a name="cloudwatchLogsConfigurationInput" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfigurationInput"></a>

```java
public IResolvable|XrayTransactionSearchConfigCloudwatchLogsConfiguration getCloudwatchLogsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

---

##### `indexingPercentageInput`<sup>Optional</sup> <a name="indexingPercentageInput" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentageInput"></a>

```java
public java.lang.Number getIndexingPercentageInput();
```

- *Type:* java.lang.Number

---

##### `indexingPercentage`<sup>Required</sup> <a name="indexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentage"></a>

```java
public java.lang.Number getIndexingPercentage();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### XrayTransactionSearchConfigCloudwatchLogsConfiguration <a name="XrayTransactionSearchConfigCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_transaction_search_config.XrayTransactionSearchConfigCloudwatchLogsConfiguration;

XrayTransactionSearchConfigCloudwatchLogsConfiguration.builder()
//  .spansLogGroupKmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration.property.spansLogGroupKmsKeyId">spansLogGroupKmsKeyId</a></code> | <code>java.lang.String</code> | The ARN of a symmetric customer managed AWS KMS key in the same account and Region, used to encrypt the aws/spans log group. |

---

##### `spansLogGroupKmsKeyId`<sup>Optional</sup> <a name="spansLogGroupKmsKeyId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration.property.spansLogGroupKmsKeyId"></a>

```java
public java.lang.String getSpansLogGroupKmsKeyId();
```

- *Type:* java.lang.String

The ARN of a symmetric customer managed AWS KMS key in the same account and Region, used to encrypt the aws/spans log group.

Key IDs and alias ARNs are not supported, so for an AWS::KMS::Key use Fn::GetAtt Arn, not Ref. X-Ray applies the key only when it creates aws/spans while enabling Transaction Search. If aws/spans already exists, for example from an earlier enablement or an earlier create that failed partway, the create fails and X-Ray does not enable Transaction Search or change the log group. Remove this property to use the existing log group with its current encryption, and use the CloudWatch Logs AssociateKmsKey API to change its key. The caller needs kms:DescribeKey on the key, and the key policy must allow CloudWatch Logs to use it. Adding, changing or removing this property replaces the resource, which fails while Transaction Search is enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#spans_log_group_kms_key_id XrayTransactionSearchConfig#spans_log_group_kms_key_id}

---

### XrayTransactionSearchConfigConfig <a name="XrayTransactionSearchConfigConfig" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_transaction_search_config.XrayTransactionSearchConfigConfig;

XrayTransactionSearchConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cloudwatchLogsConfiguration(XrayTransactionSearchConfigCloudwatchLogsConfiguration)
//  .indexingPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a></code> | Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.indexingPercentage">indexingPercentage</a></code> | <code>java.lang.Number</code> | Determines the percentage of traces indexed from CloudWatch Logs to X-Ray. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudwatchLogsConfiguration`<sup>Optional</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.cloudwatchLogsConfiguration"></a>

```java
public XrayTransactionSearchConfigCloudwatchLogsConfiguration getCloudwatchLogsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search.

It is used only at that time and is never returned

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#cloudwatch_logs_configuration XrayTransactionSearchConfig#cloudwatch_logs_configuration}

---

##### `indexingPercentage`<sup>Optional</sup> <a name="indexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.indexingPercentage"></a>

```java
public java.lang.Number getIndexingPercentage();
```

- *Type:* java.lang.Number

Determines the percentage of traces indexed from CloudWatch Logs to X-Ray.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#indexing_percentage XrayTransactionSearchConfig#indexing_percentage}

---

## Classes <a name="Classes" id="Classes"></a>

### XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference <a name="XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_transaction_search_config.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference;

new XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resetSpansLogGroupKmsKeyId">resetSpansLogGroupKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpansLogGroupKmsKeyId` <a name="resetSpansLogGroupKmsKeyId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resetSpansLogGroupKmsKeyId"></a>

```java
public void resetSpansLogGroupKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyIdInput">spansLogGroupKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyId">spansLogGroupKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spansLogGroupKmsKeyIdInput`<sup>Optional</sup> <a name="spansLogGroupKmsKeyIdInput" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyIdInput"></a>

```java
public java.lang.String getSpansLogGroupKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `spansLogGroupKmsKeyId`<sup>Required</sup> <a name="spansLogGroupKmsKeyId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyId"></a>

```java
public java.lang.String getSpansLogGroupKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|XrayTransactionSearchConfigCloudwatchLogsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

---



