# `cloudwatchMetricDataQueryDefinition` Submodule <a name="`cloudwatchMetricDataQueryDefinition` Submodule" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricDataQueryDefinition <a name="CloudwatchMetricDataQueryDefinition" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition awscc_cloudwatch_metric_data_query_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_metric_data_query_definition.CloudwatchMetricDataQueryDefinition;

CloudwatchMetricDataQueryDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .expression(java.lang.String)
    .path(java.lang.String)
    .type(java.lang.String)
//  .tags(IResolvable|java.util.List<CloudwatchMetricDataQueryDefinitionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.expression">expression</a></code> | <code>java.lang.String</code> | The metric query. It is stored as-is and is not validated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The name of the metric data query definition. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The query language of Expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>></code> | An array of key-value pairs to apply to the metric data query definition. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.expression"></a>

- *Type:* java.lang.String

The metric query. It is stored as-is and is not validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#expression CloudwatchMetricDataQueryDefinition#expression}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The name of the metric data query definition.

Use '/' to organize definitions into folders. Must be unique in the account and Region. Changing it renames the definition in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#path CloudwatchMetricDataQueryDefinition#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The query language of Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#type CloudwatchMetricDataQueryDefinition#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>>

An array of key-value pairs to apply to the metric data query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#tags CloudwatchMetricDataQueryDefinition#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudwatchMetricDataQueryDefinitionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchMetricDataQueryDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_metric_data_query_definition.CloudwatchMetricDataQueryDefinition;

CloudwatchMetricDataQueryDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_metric_data_query_definition.CloudwatchMetricDataQueryDefinition;

CloudwatchMetricDataQueryDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_metric_data_query_definition.CloudwatchMetricDataQueryDefinition;

CloudwatchMetricDataQueryDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_metric_data_query_definition.CloudwatchMetricDataQueryDefinition;

CloudwatchMetricDataQueryDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchMetricDataQueryDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchMetricDataQueryDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchMetricDataQueryDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchMetricDataQueryDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricDataQueryDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.metricDataQueryDefinitionId">metricDataQueryDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList">CloudwatchMetricDataQueryDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricDataQueryDefinitionId`<sup>Required</sup> <a name="metricDataQueryDefinitionId" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.metricDataQueryDefinitionId"></a>

```java
public java.lang.String getMetricDataQueryDefinitionId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tags"></a>

```java
public CloudwatchMetricDataQueryDefinitionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList">CloudwatchMetricDataQueryDefinitionTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchMetricDataQueryDefinitionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricDataQueryDefinitionConfig <a name="CloudwatchMetricDataQueryDefinitionConfig" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_metric_data_query_definition.CloudwatchMetricDataQueryDefinitionConfig;

CloudwatchMetricDataQueryDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .expression(java.lang.String)
    .path(java.lang.String)
    .type(java.lang.String)
//  .tags(IResolvable|java.util.List<CloudwatchMetricDataQueryDefinitionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.expression">expression</a></code> | <code>java.lang.String</code> | The metric query. It is stored as-is and is not validated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.path">path</a></code> | <code>java.lang.String</code> | The name of the metric data query definition. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.type">type</a></code> | <code>java.lang.String</code> | The query language of Expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>></code> | An array of key-value pairs to apply to the metric data query definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The metric query. It is stored as-is and is not validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#expression CloudwatchMetricDataQueryDefinition#expression}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The name of the metric data query definition.

Use '/' to organize definitions into folders. Must be unique in the account and Region. Changing it renames the definition in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#path CloudwatchMetricDataQueryDefinition#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The query language of Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#type CloudwatchMetricDataQueryDefinition#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudwatchMetricDataQueryDefinitionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>>

An array of key-value pairs to apply to the metric data query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#tags CloudwatchMetricDataQueryDefinition#tags}

---

### CloudwatchMetricDataQueryDefinitionTags <a name="CloudwatchMetricDataQueryDefinitionTags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_metric_data_query_definition.CloudwatchMetricDataQueryDefinitionTags;

CloudwatchMetricDataQueryDefinitionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#key CloudwatchMetricDataQueryDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#value CloudwatchMetricDataQueryDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricDataQueryDefinitionTagsList <a name="CloudwatchMetricDataQueryDefinitionTagsList" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_metric_data_query_definition.CloudwatchMetricDataQueryDefinitionTagsList;

new CloudwatchMetricDataQueryDefinitionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.get"></a>

```java
public CloudwatchMetricDataQueryDefinitionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchMetricDataQueryDefinitionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>>

---


### CloudwatchMetricDataQueryDefinitionTagsOutputReference <a name="CloudwatchMetricDataQueryDefinitionTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_metric_data_query_definition.CloudwatchMetricDataQueryDefinitionTagsOutputReference;

new CloudwatchMetricDataQueryDefinitionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchMetricDataQueryDefinitionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>

---



