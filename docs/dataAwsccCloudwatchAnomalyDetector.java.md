# `dataAwsccCloudwatchAnomalyDetector` Submodule <a name="`dataAwsccCloudwatchAnomalyDetector` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchAnomalyDetector <a name="DataAwsccCloudwatchAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_anomaly_detector awscc_cloudwatch_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetector;

DataAwsccCloudwatchAnomalyDetector.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_anomaly_detector#id DataAwsccCloudwatchAnomalyDetector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetector;

DataAwsccCloudwatchAnomalyDetector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetector;

DataAwsccCloudwatchAnomalyDetector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetector;

DataAwsccCloudwatchAnomalyDetector.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetector;

DataAwsccCloudwatchAnomalyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCloudwatchAnomalyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCloudwatchAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCloudwatchAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.anomalyDetectorId">anomalyDetectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference">DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList">DataAwsccCloudwatchAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricCharacteristics">metricCharacteristics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricMathAnomalyDetector">metricMathAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.singleMetricAnomalyDetector">singleMetricAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.stat">stat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `anomalyDetectorId`<sup>Required</sup> <a name="anomalyDetectorId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.anomalyDetectorId"></a>

```java
public java.lang.String getAnomalyDetectorId();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.configuration"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference">DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.dimensions"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList">DataAwsccCloudwatchAnomalyDetectorDimensionsList</a>

---

##### `metricCharacteristics`<sup>Required</sup> <a name="metricCharacteristics" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricCharacteristics"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference getMetricCharacteristics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a>

---

##### `metricMathAnomalyDetector`<sup>Required</sup> <a name="metricMathAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricMathAnomalyDetector"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference getMetricMathAnomalyDetector();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `singleMetricAnomalyDetector`<sup>Required</sup> <a name="singleMetricAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.singleMetricAnomalyDetector"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference getSingleMetricAnomalyDetector();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a>

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.stat"></a>

```java
public java.lang.String getStat();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchAnomalyDetectorConfig <a name="DataAwsccCloudwatchAnomalyDetectorConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorConfig;

DataAwsccCloudwatchAnomalyDetectorConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_anomaly_detector#id DataAwsccCloudwatchAnomalyDetector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchAnomalyDetectorConfiguration <a name="DataAwsccCloudwatchAnomalyDetectorConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorConfiguration;

DataAwsccCloudwatchAnomalyDetectorConfiguration.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges <a name="DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges;

DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorDimensions <a name="DataAwsccCloudwatchAnomalyDetectorDimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorDimensions;

DataAwsccCloudwatchAnomalyDetectorDimensions.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics <a name="DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics;

DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector;

DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries;

DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat;

DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric;

DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions;

DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector;

DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector.builder()
    .build();
```


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions;

DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList <a name="DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList;

new DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference;

new DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>

---


### DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference;

new DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges">excludedTimeRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone">metricTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfiguration">DataAwsccCloudwatchAnomalyDetectorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedTimeRanges`<sup>Required</sup> <a name="excludedTimeRanges" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList getExcludedTimeRanges();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a>

---

##### `metricTimeZone`<sup>Required</sup> <a name="metricTimeZone" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone"></a>

```java
public java.lang.String getMetricTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfiguration">DataAwsccCloudwatchAnomalyDetectorConfiguration</a>

---


### DataAwsccCloudwatchAnomalyDetectorDimensionsList <a name="DataAwsccCloudwatchAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorDimensionsList;

new DataAwsccCloudwatchAnomalyDetectorDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.get"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference;

new DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensions">DataAwsccCloudwatchAnomalyDetectorDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorDimensions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensions">DataAwsccCloudwatchAnomalyDetectorDimensions</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference;

new DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes">periodicSpikes</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics">DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodicSpikes`<sup>Required</sup> <a name="periodicSpikes" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes"></a>

```java
public IResolvable getPeriodicSpikes();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics">DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList;

new DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList;

new DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference;

new DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference;

new DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference;

new DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat">stat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```java
public java.lang.String getStat();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference;

new DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat">metricStat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData">returnData</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `metricStat`<sup>Required</sup> <a name="metricStat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference getMetricStat();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a>

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `returnData`<sup>Required</sup> <a name="returnData" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData"></a>

```java
public IResolvable getReturnData();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference;

new DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries">metricDataQueries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricDataQueries`<sup>Required</sup> <a name="metricDataQueries" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList getMetricDataQueries();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

---


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList;

new DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference;

new DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>

---


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_anomaly_detector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference;

new DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat">stat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat"></a>

```java
public java.lang.String getStat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

---



