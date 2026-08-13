# `dataAwsccNeptuneDbCluster` Submodule <a name="`dataAwsccNeptuneDbCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNeptuneDbCluster <a name="DataAwsccNeptuneDbCluster" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/neptune_db_cluster awscc_neptune_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbCluster;

DataAwsccNeptuneDbCluster.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/neptune_db_cluster#id DataAwsccNeptuneDbCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNeptuneDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbCluster;

DataAwsccNeptuneDbCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbCluster;

DataAwsccNeptuneDbCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbCluster;

DataAwsccNeptuneDbCluster.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbCluster;

DataAwsccNeptuneDbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccNeptuneDbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccNeptuneDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccNeptuneDbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccNeptuneDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/neptune_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNeptuneDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.associatedRoles">associatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList">DataAwsccNeptuneDbClusterAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.clusterResourceId">clusterResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbPort">dbPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.deletionProtection">deletionProtection</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.iamAuthEnabled">iamAuthEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.readEndpoint">readEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.restoreToTime">restoreToTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.restoreType">restoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.serverlessScalingConfiguration">serverlessScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference">DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList">DataAwsccNeptuneDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `associatedRoles`<sup>Required</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.associatedRoles"></a>

```java
public DataAwsccNeptuneDbClusterAssociatedRolesList getAssociatedRoles();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList">DataAwsccNeptuneDbClusterAssociatedRolesList</a>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.clusterResourceId"></a>

```java
public java.lang.String getClusterResourceId();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.copyTagsToSnapshot"></a>

```java
public IResolvable getCopyTagsToSnapshot();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbClusterParameterGroupName"></a>

```java
public java.lang.String getDbClusterParameterGroupName();
```

- *Type:* java.lang.String

---

##### `dbInstanceParameterGroupName`<sup>Required</sup> <a name="dbInstanceParameterGroupName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbInstanceParameterGroupName"></a>

```java
public java.lang.String getDbInstanceParameterGroupName();
```

- *Type:* java.lang.String

---

##### `dbPort`<sup>Required</sup> <a name="dbPort" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbPort"></a>

```java
public java.lang.Number getDbPort();
```

- *Type:* java.lang.Number

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbSubnetGroupName"></a>

```java
public java.lang.String getDbSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableCloudwatchLogsExports`<sup>Required</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.enableCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="globalClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.globalClusterIdentifier"></a>

```java
public java.lang.String getGlobalClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `iamAuthEnabled`<sup>Required</sup> <a name="iamAuthEnabled" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.iamAuthEnabled"></a>

```java
public IResolvable getIamAuthEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `readEndpoint`<sup>Required</sup> <a name="readEndpoint" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.readEndpoint"></a>

```java
public java.lang.String getReadEndpoint();
```

- *Type:* java.lang.String

---

##### `restoreToTime`<sup>Required</sup> <a name="restoreToTime" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.restoreToTime"></a>

```java
public java.lang.String getRestoreToTime();
```

- *Type:* java.lang.String

---

##### `restoreType`<sup>Required</sup> <a name="restoreType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.restoreType"></a>

```java
public java.lang.String getRestoreType();
```

- *Type:* java.lang.String

---

##### `serverlessScalingConfiguration`<sup>Required</sup> <a name="serverlessScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.serverlessScalingConfiguration"></a>

```java
public DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference getServerlessScalingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference">DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference</a>

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceDbClusterIdentifier`<sup>Required</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.sourceDbClusterIdentifier"></a>

```java
public java.lang.String getSourceDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.storageEncrypted"></a>

```java
public IResolvable getStorageEncrypted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.tags"></a>

```java
public DataAwsccNeptuneDbClusterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList">DataAwsccNeptuneDbClusterTagsList</a>

---

##### `useLatestRestorableTime`<sup>Required</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.useLatestRestorableTime"></a>

```java
public IResolvable getUseLatestRestorableTime();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNeptuneDbClusterAssociatedRoles <a name="DataAwsccNeptuneDbClusterAssociatedRoles" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRoles.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbClusterAssociatedRoles;

DataAwsccNeptuneDbClusterAssociatedRoles.builder()
    .build();
```


### DataAwsccNeptuneDbClusterConfig <a name="DataAwsccNeptuneDbClusterConfig" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbClusterConfig;

DataAwsccNeptuneDbClusterConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/neptune_db_cluster#id DataAwsccNeptuneDbCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNeptuneDbClusterServerlessScalingConfiguration <a name="DataAwsccNeptuneDbClusterServerlessScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration;

DataAwsccNeptuneDbClusterServerlessScalingConfiguration.builder()
    .build();
```


### DataAwsccNeptuneDbClusterTags <a name="DataAwsccNeptuneDbClusterTags" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbClusterTags;

DataAwsccNeptuneDbClusterTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNeptuneDbClusterAssociatedRolesList <a name="DataAwsccNeptuneDbClusterAssociatedRolesList" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbClusterAssociatedRolesList;

new DataAwsccNeptuneDbClusterAssociatedRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.get"></a>

```java
public DataAwsccNeptuneDbClusterAssociatedRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccNeptuneDbClusterAssociatedRolesOutputReference <a name="DataAwsccNeptuneDbClusterAssociatedRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference;

new DataAwsccNeptuneDbClusterAssociatedRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.featureName">featureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRoles">DataAwsccNeptuneDbClusterAssociatedRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.internalValue"></a>

```java
public DataAwsccNeptuneDbClusterAssociatedRoles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRoles">DataAwsccNeptuneDbClusterAssociatedRoles</a>

---


### DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference <a name="DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference;

new DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration">DataAwsccNeptuneDbClusterServerlessScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccNeptuneDbClusterServerlessScalingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration">DataAwsccNeptuneDbClusterServerlessScalingConfiguration</a>

---


### DataAwsccNeptuneDbClusterTagsList <a name="DataAwsccNeptuneDbClusterTagsList" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbClusterTagsList;

new DataAwsccNeptuneDbClusterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.get"></a>

```java
public DataAwsccNeptuneDbClusterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccNeptuneDbClusterTagsOutputReference <a name="DataAwsccNeptuneDbClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_neptune_db_cluster.DataAwsccNeptuneDbClusterTagsOutputReference;

new DataAwsccNeptuneDbClusterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTags">DataAwsccNeptuneDbClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccNeptuneDbClusterTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTags">DataAwsccNeptuneDbClusterTags</a>

---



