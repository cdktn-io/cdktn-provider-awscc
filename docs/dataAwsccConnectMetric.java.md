# `dataAwsccConnectMetric` Submodule <a name="`dataAwsccConnectMetric` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectMetric <a name="DataAwsccConnectMetric" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric awscc_connect_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetric;

DataAwsccConnectMetric.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric#id DataAwsccConnectMetric#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectMetric resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetric;

DataAwsccConnectMetric.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetric;

DataAwsccConnectMetric.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetric;

DataAwsccConnectMetric.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetric;

DataAwsccConnectMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccConnectMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccConnectMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccConnectMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccConnectMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdTime">createdTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdUser">createdUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference">DataAwsccConnectMetricCreatedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.creationMethod">creationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.effectiveTime">effectiveTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList">DataAwsccConnectMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.groupings">groupings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedUser">lastModifiedUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference">DataAwsccConnectMetricLastModifiedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricArn">metricArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricCalculation">metricCalculation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference">DataAwsccConnectMetricMetricCalculationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.positiveTrendIndicator">positiveTrendIndicator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSource">primaryEventSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSourceEffectiveTimestampType">primaryEventSourceEffectiveTimestampType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.refreshRate">refreshRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportedStats">supportedStats</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsCustomCalculation">supportsCustomCalculation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsPreaggregateCalculation">supportsPreaggregateCalculation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList">DataAwsccConnectMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdTime"></a>

```java
public java.lang.Number getCreatedTime();
```

- *Type:* java.lang.Number

---

##### `createdUser`<sup>Required</sup> <a name="createdUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdUser"></a>

```java
public DataAwsccConnectMetricCreatedUserOutputReference getCreatedUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference">DataAwsccConnectMetricCreatedUserOutputReference</a>

---

##### `creationMethod`<sup>Required</sup> <a name="creationMethod" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.creationMethod"></a>

```java
public java.lang.String getCreationMethod();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.effectiveTime"></a>

```java
public java.lang.Number getEffectiveTime();
```

- *Type:* java.lang.Number

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.filters"></a>

```java
public DataAwsccConnectMetricFiltersList getFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList">DataAwsccConnectMetricFiltersList</a>

---

##### `groupings`<sup>Required</sup> <a name="groupings" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.groupings"></a>

```java
public java.util.List<java.lang.String> getGroupings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedRegion"></a>

```java
public java.lang.String getLastModifiedRegion();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedTime"></a>

```java
public java.lang.Number getLastModifiedTime();
```

- *Type:* java.lang.Number

---

##### `lastModifiedUser`<sup>Required</sup> <a name="lastModifiedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedUser"></a>

```java
public DataAwsccConnectMetricLastModifiedUserOutputReference getLastModifiedUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference">DataAwsccConnectMetricLastModifiedUserOutputReference</a>

---

##### `metricArn`<sup>Required</sup> <a name="metricArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricArn"></a>

```java
public java.lang.String getMetricArn();
```

- *Type:* java.lang.String

---

##### `metricCalculation`<sup>Required</sup> <a name="metricCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricCalculation"></a>

```java
public DataAwsccConnectMetricMetricCalculationOutputReference getMetricCalculation();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference">DataAwsccConnectMetricMetricCalculationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `positiveTrendIndicator`<sup>Required</sup> <a name="positiveTrendIndicator" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.positiveTrendIndicator"></a>

```java
public java.lang.String getPositiveTrendIndicator();
```

- *Type:* java.lang.String

---

##### `primaryEventSource`<sup>Required</sup> <a name="primaryEventSource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSource"></a>

```java
public java.lang.String getPrimaryEventSource();
```

- *Type:* java.lang.String

---

##### `primaryEventSourceEffectiveTimestampType`<sup>Required</sup> <a name="primaryEventSourceEffectiveTimestampType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSourceEffectiveTimestampType"></a>

```java
public java.lang.String getPrimaryEventSourceEffectiveTimestampType();
```

- *Type:* java.lang.String

---

##### `refreshRate`<sup>Required</sup> <a name="refreshRate" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.refreshRate"></a>

```java
public java.lang.Number getRefreshRate();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `supportedStats`<sup>Required</sup> <a name="supportedStats" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportedStats"></a>

```java
public java.util.List<java.lang.String> getSupportedStats();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportsCustomCalculation`<sup>Required</sup> <a name="supportsCustomCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsCustomCalculation"></a>

```java
public IResolvable getSupportsCustomCalculation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `supportsPreaggregateCalculation`<sup>Required</sup> <a name="supportsPreaggregateCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsPreaggregateCalculation"></a>

```java
public IResolvable getSupportsPreaggregateCalculation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tags"></a>

```java
public DataAwsccConnectMetricTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList">DataAwsccConnectMetricTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectMetricConfig <a name="DataAwsccConnectMetricConfig" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricConfig;

DataAwsccConnectMetricConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric#id DataAwsccConnectMetric#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectMetricCreatedUser <a name="DataAwsccConnectMetricCreatedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricCreatedUser;

DataAwsccConnectMetricCreatedUser.builder()
    .build();
```


### DataAwsccConnectMetricFilters <a name="DataAwsccConnectMetricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricFilters;

DataAwsccConnectMetricFilters.builder()
    .build();
```


### DataAwsccConnectMetricLastModifiedUser <a name="DataAwsccConnectMetricLastModifiedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricLastModifiedUser;

DataAwsccConnectMetricLastModifiedUser.builder()
    .build();
```


### DataAwsccConnectMetricMetricCalculation <a name="DataAwsccConnectMetricMetricCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculation;

DataAwsccConnectMetricMetricCalculation.builder()
    .build();
```


### DataAwsccConnectMetricMetricCalculationCalculationComponents <a name="DataAwsccConnectMetricMetricCalculationCalculationComponents" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponents;

DataAwsccConnectMetricMetricCalculationCalculationComponents.builder()
    .build();
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters;

DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters.builder()
    .build();
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition;

DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.builder()
    .build();
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition;

DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.builder()
    .build();
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition;

DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.builder()
    .build();
```


### DataAwsccConnectMetricTags <a name="DataAwsccConnectMetricTags" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricTags;

DataAwsccConnectMetricTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectMetricCreatedUserOutputReference <a name="DataAwsccConnectMetricCreatedUserOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricCreatedUserOutputReference;

new DataAwsccConnectMetricCreatedUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.awsIdentityArn">awsIdentityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.connectUserArn">connectUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser">DataAwsccConnectMetricCreatedUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsIdentityArn`<sup>Required</sup> <a name="awsIdentityArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.awsIdentityArn"></a>

```java
public java.lang.String getAwsIdentityArn();
```

- *Type:* java.lang.String

---

##### `connectUserArn`<sup>Required</sup> <a name="connectUserArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.connectUserArn"></a>

```java
public java.lang.String getConnectUserArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricCreatedUser getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser">DataAwsccConnectMetricCreatedUser</a>

---


### DataAwsccConnectMetricFiltersList <a name="DataAwsccConnectMetricFiltersList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricFiltersList;

new DataAwsccConnectMetricFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get"></a>

```java
public DataAwsccConnectMetricFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccConnectMetricFiltersOutputReference <a name="DataAwsccConnectMetricFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricFiltersOutputReference;

new DataAwsccConnectMetricFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters">DataAwsccConnectMetricFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters">DataAwsccConnectMetricFilters</a>

---


### DataAwsccConnectMetricLastModifiedUserOutputReference <a name="DataAwsccConnectMetricLastModifiedUserOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricLastModifiedUserOutputReference;

new DataAwsccConnectMetricLastModifiedUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn">awsIdentityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.connectUserArn">connectUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser">DataAwsccConnectMetricLastModifiedUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsIdentityArn`<sup>Required</sup> <a name="awsIdentityArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn"></a>

```java
public java.lang.String getAwsIdentityArn();
```

- *Type:* java.lang.String

---

##### `connectUserArn`<sup>Required</sup> <a name="connectUserArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.connectUserArn"></a>

```java
public java.lang.String getConnectUserArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricLastModifiedUser getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser">DataAwsccConnectMetricLastModifiedUser</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsList <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList;

new DataAwsccConnectMetricMetricCalculationCalculationComponentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference;

new DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList;

new DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference;

new DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference;

new DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition">booleanCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey">metricFilterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate">negate</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition">numberCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition">stringCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanCondition`<sup>Required</sup> <a name="booleanCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference getBooleanCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a>

---

##### `metricFilterKey`<sup>Required</sup> <a name="metricFilterKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey"></a>

```java
public java.lang.String getMetricFilterKey();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate"></a>

```java
public IResolvable getNegate();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `numberCondition`<sup>Required</sup> <a name="numberCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference getNumberCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a>

---

##### `stringCondition`<sup>Required</sup> <a name="stringCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference getStringCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference;

new DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference;

new DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters">metricFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId">metricId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents">DataAwsccConnectMetricMetricCalculationCalculationComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `metricFilters`<sup>Required</sup> <a name="metricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList getMetricFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a>

---

##### `metricId`<sup>Required</sup> <a name="metricId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId"></a>

```java
public java.lang.String getMetricId();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponents getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents">DataAwsccConnectMetricMetricCalculationCalculationComponents</a>

---


### DataAwsccConnectMetricMetricCalculationOutputReference <a name="DataAwsccConnectMetricMetricCalculationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricMetricCalculationOutputReference;

new DataAwsccConnectMetricMetricCalculationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculation">calculation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculationComponents">calculationComponents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList">DataAwsccConnectMetricMetricCalculationCalculationComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation">DataAwsccConnectMetricMetricCalculation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `calculation`<sup>Required</sup> <a name="calculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculation"></a>

```java
public java.lang.String getCalculation();
```

- *Type:* java.lang.String

---

##### `calculationComponents`<sup>Required</sup> <a name="calculationComponents" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculationComponents"></a>

```java
public DataAwsccConnectMetricMetricCalculationCalculationComponentsList getCalculationComponents();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList">DataAwsccConnectMetricMetricCalculationCalculationComponentsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricMetricCalculation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation">DataAwsccConnectMetricMetricCalculation</a>

---


### DataAwsccConnectMetricTagsList <a name="DataAwsccConnectMetricTagsList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricTagsList;

new DataAwsccConnectMetricTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get"></a>

```java
public DataAwsccConnectMetricTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccConnectMetricTagsOutputReference <a name="DataAwsccConnectMetricTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_metric.DataAwsccConnectMetricTagsOutputReference;

new DataAwsccConnectMetricTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags">DataAwsccConnectMetricTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectMetricTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags">DataAwsccConnectMetricTags</a>

---



