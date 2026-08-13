# `dataAwsccCloudwatchMetricStream` Submodule <a name="`dataAwsccCloudwatchMetricStream` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchMetricStream <a name="DataAwsccCloudwatchMetricStream" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_metric_stream awscc_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStream;

DataAwsccCloudwatchMetricStream.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_metric_stream#id DataAwsccCloudwatchMetricStream#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchMetricStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStream;

DataAwsccCloudwatchMetricStream.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStream;

DataAwsccCloudwatchMetricStream.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStream;

DataAwsccCloudwatchMetricStream.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStream;

DataAwsccCloudwatchMetricStream.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCloudwatchMetricStream.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCloudwatchMetricStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCloudwatchMetricStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCloudwatchMetricStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchMetricStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.excludeFilters">excludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList">DataAwsccCloudwatchMetricStreamExcludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.firehoseArn">firehoseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.includeFilters">includeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList">DataAwsccCloudwatchMetricStreamIncludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.includeLinkedAccountsMetrics">includeLinkedAccountsMetrics</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.lastUpdateDate">lastUpdateDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.statisticsConfigurations">statisticsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList">DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList">DataAwsccCloudwatchMetricStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `excludeFilters`<sup>Required</sup> <a name="excludeFilters" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.excludeFilters"></a>

```java
public DataAwsccCloudwatchMetricStreamExcludeFiltersList getExcludeFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList">DataAwsccCloudwatchMetricStreamExcludeFiltersList</a>

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.firehoseArn"></a>

```java
public java.lang.String getFirehoseArn();
```

- *Type:* java.lang.String

---

##### `includeFilters`<sup>Required</sup> <a name="includeFilters" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.includeFilters"></a>

```java
public DataAwsccCloudwatchMetricStreamIncludeFiltersList getIncludeFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList">DataAwsccCloudwatchMetricStreamIncludeFiltersList</a>

---

##### `includeLinkedAccountsMetrics`<sup>Required</sup> <a name="includeLinkedAccountsMetrics" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.includeLinkedAccountsMetrics"></a>

```java
public IResolvable getIncludeLinkedAccountsMetrics();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.lastUpdateDate"></a>

```java
public java.lang.String getLastUpdateDate();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `statisticsConfigurations`<sup>Required</sup> <a name="statisticsConfigurations" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.statisticsConfigurations"></a>

```java
public DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList getStatisticsConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList">DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.tags"></a>

```java
public DataAwsccCloudwatchMetricStreamTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList">DataAwsccCloudwatchMetricStreamTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStream.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchMetricStreamConfig <a name="DataAwsccCloudwatchMetricStreamConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamConfig;

DataAwsccCloudwatchMetricStreamConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_metric_stream#id DataAwsccCloudwatchMetricStream#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchMetricStreamExcludeFilters <a name="DataAwsccCloudwatchMetricStreamExcludeFilters" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamExcludeFilters;

DataAwsccCloudwatchMetricStreamExcludeFilters.builder()
    .build();
```


### DataAwsccCloudwatchMetricStreamIncludeFilters <a name="DataAwsccCloudwatchMetricStreamIncludeFilters" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamIncludeFilters;

DataAwsccCloudwatchMetricStreamIncludeFilters.builder()
    .build();
```


### DataAwsccCloudwatchMetricStreamStatisticsConfigurations <a name="DataAwsccCloudwatchMetricStreamStatisticsConfigurations" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamStatisticsConfigurations;

DataAwsccCloudwatchMetricStreamStatisticsConfigurations.builder()
    .build();
```


### DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics <a name="DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics;

DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.builder()
    .build();
```


### DataAwsccCloudwatchMetricStreamTags <a name="DataAwsccCloudwatchMetricStreamTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamTags;

DataAwsccCloudwatchMetricStreamTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchMetricStreamExcludeFiltersList <a name="DataAwsccCloudwatchMetricStreamExcludeFiltersList" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamExcludeFiltersList;

new DataAwsccCloudwatchMetricStreamExcludeFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.get"></a>

```java
public DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference <a name="DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference;

new DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames">metricNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFilters">DataAwsccCloudwatchMetricStreamExcludeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames"></a>

```java
public java.util.List<java.lang.String> getMetricNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchMetricStreamExcludeFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamExcludeFilters">DataAwsccCloudwatchMetricStreamExcludeFilters</a>

---


### DataAwsccCloudwatchMetricStreamIncludeFiltersList <a name="DataAwsccCloudwatchMetricStreamIncludeFiltersList" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamIncludeFiltersList;

new DataAwsccCloudwatchMetricStreamIncludeFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.get"></a>

```java
public DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference <a name="DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference;

new DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames">metricNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFilters">DataAwsccCloudwatchMetricStreamIncludeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames"></a>

```java
public java.util.List<java.lang.String> getMetricNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchMetricStreamIncludeFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamIncludeFilters">DataAwsccCloudwatchMetricStreamIncludeFilters</a>

---


### DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList <a name="DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList;

new DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get"></a>

```java
public DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference <a name="DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference;

new DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>

---


### DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList <a name="DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList;

new DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.get"></a>

```java
public DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference <a name="DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference;

new DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics">additionalStatistics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics">includeMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurations">DataAwsccCloudwatchMetricStreamStatisticsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalStatistics`<sup>Required</sup> <a name="additionalStatistics" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics"></a>

```java
public java.util.List<java.lang.String> getAdditionalStatistics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeMetrics`<sup>Required</sup> <a name="includeMetrics" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics"></a>

```java
public DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList getIncludeMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">DataAwsccCloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchMetricStreamStatisticsConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamStatisticsConfigurations">DataAwsccCloudwatchMetricStreamStatisticsConfigurations</a>

---


### DataAwsccCloudwatchMetricStreamTagsList <a name="DataAwsccCloudwatchMetricStreamTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamTagsList;

new DataAwsccCloudwatchMetricStreamTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.get"></a>

```java
public DataAwsccCloudwatchMetricStreamTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchMetricStreamTagsOutputReference <a name="DataAwsccCloudwatchMetricStreamTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_metric_stream.DataAwsccCloudwatchMetricStreamTagsOutputReference;

new DataAwsccCloudwatchMetricStreamTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTags">DataAwsccCloudwatchMetricStreamTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchMetricStreamTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricStream.DataAwsccCloudwatchMetricStreamTags">DataAwsccCloudwatchMetricStreamTags</a>

---



