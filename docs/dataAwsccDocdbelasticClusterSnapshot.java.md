# `dataAwsccDocdbelasticClusterSnapshot` Submodule <a name="`dataAwsccDocdbelasticClusterSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDocdbelasticClusterSnapshot <a name="DataAwsccDocdbelasticClusterSnapshot" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot awscc_docdbelastic_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_docdbelastic_cluster_snapshot.DataAwsccDocdbelasticClusterSnapshot;

DataAwsccDocdbelasticClusterSnapshot.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot#id DataAwsccDocdbelasticClusterSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_docdbelastic_cluster_snapshot.DataAwsccDocdbelasticClusterSnapshot;

DataAwsccDocdbelasticClusterSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_docdbelastic_cluster_snapshot.DataAwsccDocdbelasticClusterSnapshot;

DataAwsccDocdbelasticClusterSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_docdbelastic_cluster_snapshot.DataAwsccDocdbelasticClusterSnapshot;

DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_docdbelastic_cluster_snapshot.DataAwsccDocdbelasticClusterSnapshot;

DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccDocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccDocdbelasticClusterSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccDocdbelasticClusterSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDocdbelasticClusterSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.adminUserName">adminUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterCreationTime">clusterCreationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotArn">snapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotCreationTime">snapshotCreationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotType">snapshotType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList">DataAwsccDocdbelasticClusterSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `adminUserName`<sup>Required</sup> <a name="adminUserName" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.adminUserName"></a>

```java
public java.lang.String getAdminUserName();
```

- *Type:* java.lang.String

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `clusterCreationTime`<sup>Required</sup> <a name="clusterCreationTime" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterCreationTime"></a>

```java
public java.lang.String getClusterCreationTime();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotArn"></a>

```java
public java.lang.String getSnapshotArn();
```

- *Type:* java.lang.String

---

##### `snapshotCreationTime`<sup>Required</sup> <a name="snapshotCreationTime" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotCreationTime"></a>

```java
public java.lang.String getSnapshotCreationTime();
```

- *Type:* java.lang.String

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotType"></a>

```java
public java.lang.String getSnapshotType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tags"></a>

```java
public DataAwsccDocdbelasticClusterSnapshotTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList">DataAwsccDocdbelasticClusterSnapshotTagsList</a>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDocdbelasticClusterSnapshotConfig <a name="DataAwsccDocdbelasticClusterSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_docdbelastic_cluster_snapshot.DataAwsccDocdbelasticClusterSnapshotConfig;

DataAwsccDocdbelasticClusterSnapshotConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot#id DataAwsccDocdbelasticClusterSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDocdbelasticClusterSnapshotTags <a name="DataAwsccDocdbelasticClusterSnapshotTags" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_docdbelastic_cluster_snapshot.DataAwsccDocdbelasticClusterSnapshotTags;

DataAwsccDocdbelasticClusterSnapshotTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDocdbelasticClusterSnapshotTagsList <a name="DataAwsccDocdbelasticClusterSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_docdbelastic_cluster_snapshot.DataAwsccDocdbelasticClusterSnapshotTagsList;

new DataAwsccDocdbelasticClusterSnapshotTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.get"></a>

```java
public DataAwsccDocdbelasticClusterSnapshotTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDocdbelasticClusterSnapshotTagsOutputReference <a name="DataAwsccDocdbelasticClusterSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_docdbelastic_cluster_snapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference;

new DataAwsccDocdbelasticClusterSnapshotTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags">DataAwsccDocdbelasticClusterSnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccDocdbelasticClusterSnapshotTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags">DataAwsccDocdbelasticClusterSnapshotTags</a>

---



